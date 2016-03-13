<?php
    /**
     * Created by PhpStorm.
     * User: Ironman
     * Date: 8/19/2015
     * Time: 3:03 PM
     */

    interface KnormAppsInterfacesItems
    {
        /**
         *
         * @return KnormAppsAbstractItem
         *
         */
        public function getItemInstance();

        /**
         *
         * @return KnormAppsAbstractItems
         *
         */
        public function getItemsInstance();


        /**
         *
         * @return KnormTablesBase
         *
         */
        public function getTable();
    }
