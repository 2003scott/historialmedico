<?php 

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class PatientFilter extends ModelFilter
{
    /**
    * Related Models that have ModelFilters as well as the method on the ModelFilter
    * As [relationMethod => [input_key1, input_key2]].
    *
    * @var array
    */
    public $relations = [];

    public function search($search)
    {
        return $this->where('name', 'LIKE', "%$search%")->orWhere('email', 'LIKE', "%$search%");
    }
}
