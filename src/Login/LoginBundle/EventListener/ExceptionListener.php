<?php
namespace Login\LoginBundle\EventListener;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Event\GetResponseForExceptionEvent;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;



class ExceptionListener
{
    public function onKernelException(GetResponseForExceptionEvent $event)
    {
        // You get the exception object from the received event
        $exception = $event->getException();
        $message = sprintf(
            'Error says: %s ',
            $exception->getMessage(),
            $exception->getCode()
        );
        // Customize your response object to display the exception details
        $response = new JsonResponse(["message" => $message]);


        // Send the modified response object to the event
        $event->setResponse($response);
    }
}