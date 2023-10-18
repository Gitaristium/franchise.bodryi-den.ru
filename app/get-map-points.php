<? require_once($_SERVER['DOCUMENT_ROOT'] . "/bitrix/modules/main/include/prolog_before.php");

CModule::IncludeModule('iblock');
$dbEl = CIBlockElement::GetList(
	array(),
	array(
		'ACTIVE' => 'Y',
		'IBLOCK_ID' => 41,
	),
	false,
	false,
	array('IBLOCK_ID', 'ID', 'NAME', 'PROPERTY_ADDRESS', 'PROPERTY_FORMAT', 'PROPERTY_COORDS')
);
$arrPoints = array();

while ($obEl = $dbEl->GetNextElement()) {
	$obItem = $obEl->fields;
	$obItemID = $obItem['ID'];
	$obItemNAME = $obItem['NAME'];
	$obItemADDRESS = $obItem['PROPERTY_ADDRESS_VALUE'];
	$obItemFORMAT = $obItem['PROPERTY_FORMAT_VALUE'];
	$obItemCOORDS = $obItem['PROPERTY_COORDS_VALUE'];
	$newElement = array('ID' => $obItemID, 'name' => $obItemNAME, 'address' => $obItemADDRESS, 'format' => $obItemFORMAT, 'coordinates' => $obItemCOORDS);
	array_push($arrPoints, $newElement);
}
echo json_encode($arrPoints);
