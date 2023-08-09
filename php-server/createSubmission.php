<?php
session_start();
include __DIR__ . '/JotForm.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    $jsonData = file_get_contents('php://input');
    $formData = json_decode($jsonData, true);
} catch (Exception $e) {
    echo "Hatalı JSON verisi alındı: " . $e->getMessage();
    exit;
}

if (isset($formData['cloned_form_id'])) {
    $clonedFormId = $formData['cloned_form_id'];
} else {
    echo "Klonlanmış Form ID'si bulunamadı. 'cloned_form_id' parametresini JSON verisinde gönderdiğinizden emin olun.";
    exit;
}

if (isset($formData['scraped_data'])) {
    $scrapedData = $formData['scraped_data'];
} else {
    echo "Scraped data bulunamadı. createForm.php'de scraped_data'yı almayı unutmayın.";
    exit;
}

if (isset($formData['apiKey'])) {
    $apiKey = $formData['apiKey'];
} else {
    echo "API KEY bulunamadı";
    exit;
}

$submissionData = array(
    "3" => $scrapedData['data']['name'],
    "4" => $scrapedData['data']['title'],
    "5" => $scrapedData['data']['location'],
    "145" => $scrapedData['data']['about']
);

if (isset($scrapedData['data']['experiences']) && is_array($scrapedData['data']['experiences'])) {
    $experiences = $scrapedData['data']['experiences'];
    $qid = 12;
    foreach ($experiences as $experience) {
        $submissionData[$qid++] = $experience['title'];
        $submissionData[$qid++] = $experience['subtitle'];
        $submissionData[$qid++] = $experience['startDate'];
        $submissionData[$qid++] = $experience['endDate'];
        $submissionData[$qid++] = $experience['location'];
        $qid = max($qid, 28);
    }
}

if (isset($scrapedData['data']['educations']) && is_array($scrapedData['data']['educations'])) {
    $educations = $scrapedData['data']['educations'];
    $qid = 18;
    foreach ($educations as $educations) {
        $submissionData[$qid++] = $educations['degree'];
        $submissionData[$qid++] = $educations['school'];
        $submissionData[$qid++] = $educations['date'];
        $qid = max($qid, 73);
    }
}

if (isset($scrapedData['data']['licensesAndCertifications']) && is_array($scrapedData['data']['licensesAndCertifications'])) {
    $licensesAndCertifications = $scrapedData['data']['licensesAndCertifications'];
    $qid = 21;
    
    foreach ($licensesAndCertifications as $education) {
        if ($qid === 21) {
            $submissionData[21] = $education['title'];
            $submissionData[23] = $education['issuingAuthority'];
            $submissionData[24] = $education['date'];
            $qid = 100; 
        } else {
            $submissionData[$qid++] = $education['title'];
            $submissionData[$qid++] = $education['issuingAuthority'];
            $submissionData[$qid++] = $education['date'];
        }
    }
}


if (isset($scrapedData['data']['languages']) && is_array($scrapedData['data']['languages'])) {
    $languages = $scrapedData['data']['languages'];
    $qid = 25;
    foreach ($languages as $language) {
        $submissionData[$qid++] = $language['title'];
        $submissionData[$qid++] = $language['issuingAuthority'];
        $qid = max($qid, 127);
    }
}


$jotformAPI = new JotForm($apiKey);
$result = $jotformAPI->createFormSubmission($clonedFormId, $submissionData);

$finalResult = array(
    "result" => $result,
    "scraped_data" => $scrapedData
);
echo json_encode($finalResult);

?>
