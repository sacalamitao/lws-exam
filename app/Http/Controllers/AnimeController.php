<?php

namespace App\Http\Controllers;

use App\Models\Anime;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class AnimeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Anime::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Anime/Create', [
            'message' => session('message'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'name' => ['required'],
            'rating' => ['required'],
            'details' => ['required'],
            'image' => ['required'],
            'description' => ['required'],
        ])->validate();
    
        $anime = Anime::create($request->all());

        return response()->json([
            'message' => 'Data successfully saved!',
            'data' => $anime
        ]);
    
        // return redirect()->route('dashboard')
        //             ->with('message', 'Post created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show($anime)
    {
        return Anime::findOrFail($anime);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Anime $anime)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $anime)
    {
        Validator::make($request->all(), [
            'name' => ['required'],
            'rating' => ['required'],
            'details' => ['required'],
            'image' => ['required'],
            'description' => ['required'],
        ])->validate();

        $anime = Anime::findOrFail($anime);
        $anime->update($request->all());

        return response()->json($anime, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($anime)
    {
        Log::info($anime);
        $anime = Anime::find($anime);
        $anime->delete();

        return response()->json(null, 204);
    }
}
