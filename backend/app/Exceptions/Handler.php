<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $exception)
    {
        // If the request is an API request, return JSON response
        if ($request->is('api/*')) {
            $status = 500;
            $message = $exception->getMessage();

            // If it's a validation exception, handle separately
            if ($exception instanceof \Illuminate\Validation\ValidationException) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation errors',
                    'errors'  => $exception->errors()
                ], 422);
            }

            // Optionally handle 404 Not Found
            if ($exception instanceof \Symfony\Component\HttpKernel\Exception\NotFoundHttpException) {
                return response()->json([
                    'success' => false,
                    'message' => 'Resource not found.'
                ], 404);
            }

            // Generic error fallback
            return response()->json([
                'success' => false,
                'message' => $message,
            ], $status);
        }

        // Default handling for non-API routes
        return parent::render($request, $exception);
    }
}
