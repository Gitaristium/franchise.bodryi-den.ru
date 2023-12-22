<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php"); ?>

<?

use Bitrix\Main\Page\Asset;

Asset::getInstance()->addCss(SITE_DIR . 'assets/theme/css/alternate.css');

?>

<div id="panel">
    <? $APPLICATION->ShowPanel(); ?>
</div>

<? require($_SERVER["DOCUMENT_ROOT"] . "/sections/header.php"); ?>

<div class="wrapper">
    <? require($_SERVER["DOCUMENT_ROOT"] . "/sections/offer.php"); ?>
    <? require($_SERVER["DOCUMENT_ROOT"] . "/sections/finmodel.php"); ?>
    <? require($_SERVER["DOCUMENT_ROOT"] . "/sections/franchise-pack.php"); ?>
    <? require($_SERVER["DOCUMENT_ROOT"] . "/sections/formats.php"); ?>
    <? require($_SERVER["DOCUMENT_ROOT"] . "/sections/cases.php"); ?>
    <? require($_SERVER["DOCUMENT_ROOT"] . "/sections/calculator.php"); ?>
    <? require($_SERVER["DOCUMENT_ROOT"] . "/sections/stages.php"); ?>
    <? require($_SERVER["DOCUMENT_ROOT"] . "/sections/design.php"); ?>
    <? require($_SERVER["DOCUMENT_ROOT"] . "/sections/youtube.php"); ?>
    <? require($_SERVER["DOCUMENT_ROOT"] . "/sections/map.php"); ?>
    <? require($_SERVER["DOCUMENT_ROOT"] . "/sections/smi.php"); ?>
    <? require($_SERVER["DOCUMENT_ROOT"] . "/sections/contacts.php"); ?>
</div>

<? require($_SERVER["DOCUMENT_ROOT"] . "/modals/popup.php"); ?>
<? require($_SERVER["DOCUMENT_ROOT"] . "/modals/popup-sended.php"); ?>
<? require($_SERVER["DOCUMENT_ROOT"] . "/modals/burger.php"); ?>

<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>