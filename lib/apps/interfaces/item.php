<?php
    /**
     * Created by PhpStorm.
     * User: Ironman
     * Date: 8/19/2015
     * Time: 3:03 PM
     */

    interface KnormAppsInterfacesItem
    {

        public static function getInstance(Joomla\Registry\Registry $state = null);
        public function getTable();
    }
