<?php
include "./Jotform.php";
$jotformAPI = new JotForm("72264ed8b8d9642cd583f204e686914d");

if (isset($_GET['form_id'])) {
    $formId = $_GET['form_id'];
} else {
    http_response_code(400);
    echo json_encode(array("error" => "Form ID is missing."));
    exit();
}

$form = $jotformAPI->getForm($formId);
echo json_encode($form);
?>
