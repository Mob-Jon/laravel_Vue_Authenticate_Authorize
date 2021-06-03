<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RequestController extends Controller
{
    public function requestList()
    {
        return [
            [
                'title' => 'Request No.1',
                'text'  => 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex'
            ],
            [
                'title' => 'Request No.2',
                'text'  => 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            ]
        ];
    }
}
