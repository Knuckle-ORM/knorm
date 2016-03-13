<?php
    use Joomla\Registry\Registry;

    /**
     * Created by Joseph Cardwell.
     * User: Ironman
     * Date: 10/8/2015
     * Time: 1:19 PM
     */

    class KnormModulesKnormModelsItems extends KnormBaseModel
    {
        /** @var  KnormAppsKnormItems */
        public $items;

        protected function execute()
        {
            if($this->state->get('paging',false)){

                $limit = $this->state->get('limit');
                $filters = $this->state->get('filters');
                $count = $this->state->get('count',false);

                $appState = new Joomla\Registry\Registry([
                    'limit'=>$limit,
                    'count'=>$count,
                    'filters'=>$filters,
                    'joins'=>$this->state->get('joins',false)
                ]);

                /** @var KnormAppsKnormApp $app */
                $app = KnormAppsKnormApp::getInstance(
                    $appState
                );

                $appCollection = $app->getCollection();

                $this->count = $appCollection->count;

                $this->items = $appCollection->items;

                foreach($this->items as &$item){
                    //do fun stuff with these objects
                }

            }else{

                $this->items = KnormAppsKnormApp::getInstance(
                    new Joomla\Registry\Registry($this->state->toObject())
                )->getItems();
            }

        }

        public function save(){
            $this->items->update();
        }

        public function delete(){
            $this->items->delete();
        }
    }