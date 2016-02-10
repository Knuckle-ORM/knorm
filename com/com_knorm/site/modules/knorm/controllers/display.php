<?php
    
    /**
     * Created by Joseph Cardwell.
     * User: Ironman
     * Date: 12/18/2015
     * Time: 3:03 PM
     */

    class KnormModulesKnormControllersDisplay extends JControllerBase
    {
        public function execute(){
            $model = new KnormModulesKnormModelsDisplay();

            $view = new KnormModulesKnormViewsDisplayHtml($model);
            echo $view->render();
        }


    }