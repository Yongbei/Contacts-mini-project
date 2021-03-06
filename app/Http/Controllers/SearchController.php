<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;
use App\Http\Resources\Contact as ContactResource;

class SearchController extends Controller
{
    public function index()
    {
        $data = request()->validate([
            'searchTerm' => 'required',
        ]);

        // searchable trait method: search()
        $contacts = Contact::search($data['searchTerm'])
            ->where('user_id', request()->user()->id)
            ->get();

        return ContactResource::collection($contacts);
    }
}
