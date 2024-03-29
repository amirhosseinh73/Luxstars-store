<section id="search_index" class="pt-boot-45 pb-boot-45 mt-boot-75">
    <div class="container">
        <div class="row align-items-end">
            <div class="col-12 mb-boot-12">
                <h6 class="text-boot-4 fw600 font-20 tit-L-before">جستجوی پیشرفته محصول</h6>
            </div>
            <div class="col-12 my-auto text-md-right text-center">
                <?php echo do_shortcode('[fibosearch]'); ?>
            </div>
        </div>
    </div>
</section>
<header id="header" class="container-fluid">
    <div id="slide_show" class="row">
        <div class="col-12 px-0">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <?php if (get_theme_mod('slider_1_display', 'show') == 'show') : ?>
                    <div class="swiper-slide">
                        <img src="<?php echo get_theme_mod( 'slider_1', get_template_directory_uri() . '/img/slide-1.jpg'); ?>"
                             class="img-fluid d-block w-100 object-fit-cover" alt="">
                    </div>
                    <?php endif;?>
                    <?php if (get_theme_mod('slider_2_display', 'show') == 'show') : ?>
                    <div class="swiper-slide">
                        <img src="<?php echo get_theme_mod( 'slider_2', get_template_directory_uri() . '/img/slide-2.jpg'); ?>"
                             class="img-fluid d-block w-100 object-fit-cover" alt="">
                    </div>
                    <?php endif;?>
                    <?php if (get_theme_mod('slider_3_display', 'show') == 'show') : ?>
                    <div class="swiper-slide">
                        <img src="<?php echo get_theme_mod( 'slider_3', get_template_directory_uri() . '/img/slide-3.jpg'); ?>"
                             class="img-fluid d-block w-100 object-fit-cover" alt="">
                    </div>
                    <?php endif;?>
                    <?php if (get_theme_mod('slider_4_display', 'show') == 'show') : ?>
                    <div class="swiper-slide">
                        <img src="<?php echo get_theme_mod( 'slider_4', get_template_directory_uri() . '/img/slide-4.jpg'); ?>"
                             class="img-fluid d-block w-100 object-fit-cover" alt="">
                    </div>
                    <?php endif;?>
                </div>
            </div>
        </div>
    </div>
</header>