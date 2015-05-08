<?include('../partials/geo-body-open.php');?>

<div class="geo-header-section">
  <div class="geo-feature-title">
    <div class="container">
      <h6>Layouts</h6>
      <h1>Your Portfolio</h1>
    </div>
    <div class="geo-page-subtitle">Classic Portfolio</div>
  </div>
  <div class="geo-pattern"></div>
  <div class="geo-bg-image" style="background-image: url(/img/image-2.png);"></div>
</div>

<div class="geo-portfolio-list geo-portfolio-list-custom">

    <div class="geo-content-area">

      <ul id="filters" class="geo-portfolio-filter">
        <li><a class="is-checked" data-filter="*">All</a></li>
        <li><a data-filter=".art">Art</a></li>
        <li><a data-filter=".business">Business</a></li>
        <li><a data-filter=".fashion">Fashion</a></li>
        <li><a data-filter=".photography">Photography</a></li>
      </ul>

      <div class="geo-portfolio-isotope-fitrows clearfix">

        <article class="art " data-category="art">
          <img src="/img/portfolio-custom-1.png" alt="portfolio" />
          <div class="fx-layout">
            <span>
              <i>
                <a href="#" class="geo-btn geo-btn-primary">Read More</a>
                <h6>art</h6>
                <h5>Venice Art Pavilion</h5>
              </i>
            </span>
          </div>
        </article>

        <article class="business " data-category="business">
          <img src="/img/portfolio-custom-2.png" alt="portfolio" />
          <div class="fx-layout">
            <span>
              <i>
                <a href="#" class="geo-btn geo-btn-primary">Read More</a>
                <h6>business</h6>
                <h5>Venice Art Pavilion</h5>
              </i>
            </span>
          </div>
        </article>

        <article class="fashion art photography " data-category="fashion">
          <img src="/img/portfolio-custom-3.png" alt="portfolio" />
          <div class="fx-layout">
            <span>
              <i>
                <a href="#" class="geo-btn geo-btn-primary">Read More</a>
                <h6>fashion, art, photography</h6>
                <h5>Venice Art Pavilion</h5>
              </i>
            </span>
          </div>
        </article>

      </div>

      <div class="geo-portfolio-show-more clearfix">
        <a href="#" class="geo-btn geo-btn-primary geo-btn-lg">Show More</a>
      </div>

    </div>

</div>

<?include('../partials/geo-body-close.php');?>
