<section id="calculator" class="calculator section-calculator">
	<div class="container">
		<h4 class="title title-single calculator__title">
			рассчитай прибыль твоей&nbsp;кофейни
		</h4>
		<div class="wrap-main-content">
			<div class="max-container-calculator show">
				<div class="container-fluid">
					<div class="row">
						<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 fp-no-scroll">
							<div class="calculator-group calculator-group-place">
								<div class="group-label">
									место размещения
								</div>
								<ul class="calculator-places list-inline">
									<li>
										<div class="radio">
											<input type="radio" name="calculator-places" value="tc" id="calculator-place1" checked />
											<label for="calculator-place1">торговый
												центр</label>
										</div>
									</li>
									<li>
										<div class="radio">
											<input type="radio" name="calculator-places" value="bc" id="calculator-place2" />
											<label for="calculator-place2">бизнес-центр</label>
										</div>
									</li>
									<li>
										<div class="radio">
											<input type="radio" name="calculator-places" value="street" id="calculator-place3" />
											<label for="calculator-place3">улица
											</label>
										</div>
									</li>
								</ul>
								<div class="text-places">
									средними значениями для
									торгового центра являются
									проходимость 6000 человек в день
									при аренде 51500 рублей.
								</div>
							</div>
							<div class="calculator-group calculator-group-slider">
								<div class="group-label">
									проходимость места, человек\день
								</div>
								<div id="slider-passability"></div>
								<div class="slider-group-label">
									<div class="d-flex justify-content-between">
										<div>
											<span class="slider-label" id="passabilityMin">500</span>
										</div>
										<div>
											<span class="slider-label" id="passabilityMax">10000</span>
										</div>
									</div>
								</div>
							</div>
							<div class="calculator-group calculator-group-slider">
								<div class="group-label">
									арендная ставка в месяц
								</div>
								<div id="slider-price"></div>
								<div class="slider-group-label">
									<div class="d-flex justify-content-between">
										<div>
											<span class="slider-label" id="priceMin">5000</span>
										</div>
										<div>
											<span class="slider-label" id="priceMax">150000</span>
										</div>
									</div>
								</div>
							</div>
							<div class="calculator-group calculator-group-slider">
								<div class="group-label">
									конверсия
								</div>
								<div id="slider-conversion"></div>
								<div class="slider-group-label">
									<div class="d-flex justify-content-between">
										<div>
											<span class="slider-label" id="conversionMin">1</span>
										</div>
										<div>
											<span class="slider-label" id="conversionMax">10</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
							<div class="d-flex align-items-center justify-content-center h-100">
								<div class="w-100 text-center">
									<svg class="calculator-profit" width="300" height="300" viewBox="0 0 300 300" aria-labelledby="" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
										<circle class="calculator-profit__circle" r="130" cx="150" cy="150">
										</circle>
										<circle class="calculator-profit__glow" r="130" cx="150" cy="150">
										</circle>
										<text class="calculator-profit__number" x="50%" y="50%">
											635520 руб
										</text>
										<text class="calculator-profit__label" x="50%" y="60%">
											чистая прибыль в месяц
										</text>
									</svg>
								</div>
							</div>
						</div>
						<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
							<div class="d-flex flex-column align-items-center h-100">
								<table>
									<thead>
										<tr>
											<td class="calculator-group">
												<div class="group-label">
													экономические
													показатели за
													месяц
												</div>
											</td>
											<td>руб</td>
											<td></td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>оборот кофейни</td>
											<td id="total">
												34 000
											</td>
										</tr>
										<tr>
											<td>
												рентабельность по
												прибыли
											</td>
											<td id="cost">
												34 000%
											</td>
										</tr>
										<tr>
											<td>
												себестоимость
												продукции
											</td>
											<td id="raw">0</td>
										</tr>
										<tr>
											<td>
												налоговые ставки
											</td>
											<td id="taxes">
												39 000
											</td>
											<td>14500</td>
										</tr>
										<tr>
											<td></td>
											<td>УСН 6%</td>
											<td>или патент</td>
										</tr>
										<tr>
											<td>арендная ставка</td>
											<td id="rent">
												45 000
											</td>
										</tr>
										<tr>
											<td>
												фонд оплаты труда
											</td>
											<td>39 000</td>
										</tr>
										<tr>
											<td>средний чек</td>
											<td>250</td>
										</tr>
										<tr>
											<td>конверсия</td>
											<td id="conver">1%</td>
										</tr>
									</tbody>
								</table>
								<div class="button">
									<button id="btn-calculator" class="btn btn-black open-form get-plan shake-bottom anim anim--active" id="btnform32" data-fancybox data-type="ajax" data-src="/ajax/nform32.php" data-touch="false" data-hideOnOverlayClick="false" href="javascript:;" type="button">
										получить бизнес-план
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>