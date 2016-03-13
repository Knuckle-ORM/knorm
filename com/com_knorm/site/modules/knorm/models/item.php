<?php
    use Joomla\Registry\Registry;

    /**
     * Created by Joseph Cardwell.
     * User: Ironman
     * Date: 10/8/2015
     * Time: 1:19 PM
     */

    class KnormModulesKnormModelsItem extends KnormBaseModel
    {
        public $id;
        public $created;

        public function execute()
        {
            $app = new NormAppsNormApp(
                new Registry($this->state->toObject())
            );
            $this->item = $app->getItem();
            $this->id = $this->item->id;
            $this->created = $this->item->created;

            if($this->item->id != null){
                //do fun stuff with this object.
            }
        }

        public function update()
        {
            $this->item->update();
        }

        public function delete()
        {
            $this->item->delete();
        }
    }