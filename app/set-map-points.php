<? require_once($_SERVER['DOCUMENT_ROOT'] . "/bitrix/modules/main/include/prolog_before.php");

CModule::IncludeModule('iblock');
CIBlockElement::SetPropertyValuesEx($_POST['id'], 41, array('88' => $_POST['coords']));

echo 'ok';
