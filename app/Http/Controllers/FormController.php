<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormController extends Controller
{
    public function submit(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
        ]);

        // Handle the validated data (e.g., save to database)
        // ...

        return response()->json(['message' => 'Form submitted successfully!']);
    }
}
