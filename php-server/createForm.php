<?php
session_start();
ini_set('display_errors', 1);
error_reporting(E_ALL);

include __DIR__ . '/JotForm.php';
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type"); 
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

function scrapeAndCloneForm() {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $jsonData = file_get_contents('php://input');
        $formData = json_decode($jsonData, true);
        
        if (isset($formData['api_key']) && isset($formData['form_id']) && isset($formData['linkedin_url'])) {
            $apiKey = $formData['api_key'];
            $jotformAPI = new JotForm($apiKey);

            $linkedinUrl = $formData['linkedin_url'];

            $url = 'https://pdfwizard-scrape-b68c4929fd43.herokuapp.com/scrape';
            $postData = array(
                'url' => $linkedinUrl
            );
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
            $scrapedData = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE); // Get the HTTP response code
            curl_close($ch);

  
            $response = null; // Initialize $response to null
            if (isset($formData['form_id'])) {
                $formId = $formData['form_id'];
                $response = $jotformAPI->cloneForm($formId);
                $clonedFormId = $response['id'];
                $_SESSION['cloned_form_id'] = $clonedFormId;
            }

            $finalResponse = array(
                "response" => $response,
                "scraped_data" => json_decode($scrapedData)
            );

            $scrapedData = $finalResponse['scraped_data'];
            $_SESSION['scraped_data'] = $scrapedData;

            echo json_encode($finalResponse);
            return;
        } else {
            http_response_code(400);
            echo json_encode(array("error" => "Invalid JSON data. Make sure 'api_key', 'form_id', and 'linkedin_url' are provided."));
            return;
        }
    } else {
        http_response_code(405);
        echo json_encode(array("error" => "Method not allowed. Only POST requests are accepted."));
        return;
    }
}

scrapeAndCloneForm();

?>
