<div id="popup" class="modal">
	<div class="overlay"></div>
	<form class="form" action="" method="POST" id="ajax__modal">
		<span class="form__title">оставить заявку</span>
		<button class="close">
			<div class="close__inner"><span></span><span></span></div>
		</button>
		<div class="input-box">
			<input type="text" name="user__name" value="" size="40" class="input input__name" id="input__name--modal" aria-required="true" aria-invalid="false" placeholder=" " autocomplete="on" />
			<label for="input__name--modal" class="input__label">имя*</label>
		</div>
		<div class="input-box">
			<input type="text" name="user__city" value="" size="40" class="input input__city" id="input__city--modal" aria-required="true" aria-invalid="false" placeholder=" " autocomplete="on" />
			<label for="input__city--modal" class="input__label">город*</label>
		</div>
		<div class="input-box">
			<input type="tel" name="user__phone" value="" id="input__phone--modal" class="input input__phone" aria-required="true" aria-invalid="false" size="10" placeholder=" " data-mask="_ (___) ___-__-__" autocomplete="on" />
			<label for="input__phone--modal" class="input__label">номер телефона*</label>
		</div>
		<div class="input-box">
			<input type="email" name="user__email" value="" size="40" class="input input__email" id="input__email--modal" aria-required="false" aria-invalid="false" placeholder=" " autocomplete="on" />
			<label for="input__email--modal" class="input__label">e-mail</label>
		</div>
		<div class="input-box">
			<input type="checkbox" name="user__messenger" value="yes" class="input input__messenger" id="input__messenger--modal" aria-required="false" aria-invalid="false" autocomplete="off" />
			<label for="input__messenger--modal" class="input__label-checkbox">напишите мне в мессенджер</label>
		</div>
		<input type="text" name="click__place" value="" hidden id="input__click__place--modal" aria-required="false" aria-invalid="false" autocomplete="off" />
		<input type="text" name="click__ya-target" value="" hidden id="input__click__ya-target--modal" aria-required="false" aria-invalid="false" autocomplete="off" />
		<input type="text" name="utm_source" value="" hidden id="input__utm_source--modal" aria-required="false" aria-invalid="false" autocomplete="off" />
		<input type="text" name="utm_medium" value="" hidden id="input__utm_medium--modal" aria-required="false" aria-invalid="false" autocomplete="off" />
		<input type="text" name="utm_campaign" value="" hidden id="input__utm_campaign--modal" aria-required="false" aria-invalid="false" autocomplete="off" />
		<input type="text" name="utm_content" value="" hidden id="input__utm_content--modal" aria-required="false" aria-invalid="false" autocomplete="off" />
		<input type="text" name="utm_term" value="" hidden id="input__utm_term--modal" aria-required="false" aria-invalid="false" autocomplete="off" />
		<input type="text" name="_ym_uid" value="" hidden id="input__ym_uid--modal" aria-required="false" aria-invalid="false" autocomplete="off" />
		<button class="input__btn" id="btn-ajax__modal" type="button">
			получить бизнес-план
		</button>
	</form>
</div>