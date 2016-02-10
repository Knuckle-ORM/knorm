<?php

    use Joomla\Registry\Registry;

    /**
     * Created by PhpStorm.
     * User: Ironman
     * Date: 8/19/2015
     * Time: 2:46 PM
     */
    
    trait KnormAppsKnormTrait
    {
        /** @var  KnormTablesBase | KnormTablesNestedbase
        protected $_table = false; */
        
        protected $_key = 'id';
        protected $_table_alias ='knorm';
        
        
        
        /**
         * @return bool|\KnormTablesBase
         */
        public function getTable()
        {
            return
                $this->_table
                    ?
                        $this->_table
                    :
                        $this->_table = new KnormTablesBase('#__knorm_knorm_items','id',$this->getTableAlias());
        }
        
        public static function getInstance( Registry $state = null)
        {
            return new self($state);
        }
        
        /**
         * @param Registry | null $state
         *
         * @return \KnormAppsAccountItem
         *
         */
        public function getItemInstance( Registry $state = null)
        {
            return KnormAppsKnormItem::getInstance( $state );
        }
        
        /**
         * @param   Registry $state
         *
         * @return KnormAppsAccountItems
         */
        public function getItemsInstance( Registry $state = NULL )
        {
            return KnormAppsKnormItems::getInstance($state);
        }
        
        /**
         * @return  Registry
         */
        protected function getState()
        {
            return Registry::getInstance($this->_statekey);
        }
    }