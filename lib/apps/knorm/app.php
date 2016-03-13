<?php
    /**
     * Created by PhpStorm.
     * User: Ironman
     * Date: 8/12/2015
     * Time: 3:56 PM
     */


    class KnormAppsAccountApp extends KnormAppsAbstractApp
    {
        use KnormAppsAccountTrait;

        /** @var  KnormAppsAccountItem */
        public $item;

        /** @var  KnormAppsAccountItems[] */
        public $items;

        protected $_statekey = 'KnormAppsAccountApp';
    }