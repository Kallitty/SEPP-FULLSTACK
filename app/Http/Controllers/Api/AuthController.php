<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(LoginRequest $request){
      $data= $request-> validated();
    /** @var \App\Models\User $user */
      $user= User::create([
        'name'=> $data['name'],
        'email'=> $data['email'],
        'password'=> bcrypt($data['password']),
      ]);
      $token = $user->createToken(name: 'main')->plainTextToken;

      return response([
        'user' =>$user,
        'token' =>$token,
    ]);
    }
    public function signup(SignupRequest $request){

    }
    public function logout(Request $request){

    }
}
