<? require_once($_SERVER['DOCUMENT_ROOT'] . "/bitrix/modules/main/include/prolog_before.php");

if (CModule::IncludeModule("form")) {

	$checkbox = $_POST["user__messenger"] ? 'ДА' : 'НЕТ';

	$RESULT_ID = CFormResult::Add(6, array(
		'form_text_49' => $_POST["user__name"],
		'form_text_50' => $_POST["user__city"],
		'form_text_51' => $_POST["user__phone"],
		'form_text_52' => $_POST["user__email"],
		'form_text_53' => $checkbox,
		'form_text_54' => $_POST["click__place"],
	));
	// CFormCRM::onResultAdded($FORM_ID, $RESULT_ID);
	// CFormResult::SetEvent($RESULT_ID, 'form', 'franchise', 'feedback');
	CFormResult::SetEvent($RESULT_ID, 'form', 'franchise', 'feedback');
	CFormResult::Mail($RESULT_ID);
	CFormCrm::AddLead(6, $RESULT_ID);

	echo 'SENDED';
} else echo 'ERROR';
