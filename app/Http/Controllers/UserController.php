<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        $user = DB::table('users')->where('email', $credentials['email'])->first();

        if (!$user || !Hash::check($credentials['password'], $user->password)) {

            return response()->json(['status'=> 'Failed on login', 'message' => 'User is not authenticated']);
        }
        else{
            if (Auth::attempt($credentials)) {

                $token = Auth::user()->createToken('my_token')->plainTextToken;

                $response = [
                    'token' => $token,
                    'user' => $user,
                    'authenticated' => Auth::check()
                ];
                return response()->json($response);
              
            }
            echo 'error';
            abort(401);
        }
    }
    
    public function logout()
    {
        Auth::logout();
        return response(['response' => 'success logout'], 200);
    }
}
