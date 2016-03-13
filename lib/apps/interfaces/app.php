<?php
/**
 * Created by PhpStorm.
 * User: Ironman
 * Date: 8/19/2015
 * Time: 3:19 PM
 */

    interface KnormAppsInterfacesApp
    {


        /**         *
         * @return KnormAppsAbstractItem
         */
        public function getItemInstance();

        /**
         * @return KnormAppsAbstractItems
         */
        public function getItemsInstance();
    }