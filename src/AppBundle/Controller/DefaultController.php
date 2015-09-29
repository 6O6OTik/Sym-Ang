<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use AppBundle\Entity\User;




class DefaultController extends Controller
{

    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', array(
            'base_dir' => realpath($this->container->getParameter('kernel.root_dir').'/..'),
        ));
    }

    /**
     * @Route("/show", name="show")
     */

    public function showAction ()
    {
        $em = $this->getDoctrine()->getManager();
        $products = $em->getRepository('AppBundle:User')->findAll();

        $result = ('');

        foreach ($products as $key => $product){
           $result[$key]['id'] = $product->getId();
           $result[$key]['name'] = $product->getName();
           $result[$key]['age'] = $product->getAge();
        }

        $response = new Response(json_encode($result));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }



    /**
     * @Route("/delete", name="delete")
     */

    public function deleteAction (Request $request)
    {
        if ($_SERVER["REQUEST_METHOD"] == "DELETE"){
           $userId =  $request->get('userId');

            $em = $this->getDoctrine()->getManager();
            $entity = $em->getRepository('AppBundle:User')->find($userId);

            if (!$entity) {
                throw $this->createNotFoundException('Unable to find User entity.');
            }

            $em->remove($entity);
            $em->flush();


        }

        $response = new Response(json_encode(array('result' => true ) ));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    /**
     * @Route("/add", name="add")
     */

    public function addAction (Request $request)
    {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {

            $user = new User();
            $user->setName( $request->get('userName'));
            $user->setAge($request->get('userAge'));

            $em = $this->getDoctrine()->getEntityManager();
            $em->persist($user);
            $em->flush();
            $id = $user->getId();

            
            return new Response( json_encode(array('userId' => $id )));
        }
    }

    /**
     * @Route("/edit", name="edit")
     */

    public function editAction (Request $request)
    {
        if ($_SERVER["REQUEST_METHOD"] == "PUT") {


            $em = $this->getDoctrine()->getManager();
            $user = $em->getRepository('AppBundle:User')->find($request->get('userId'));

            if (!$user) {
                throw $this->createNotFoundException(
                    'No user found'
                );
            }

            $user->setName($request->get('userName'));
            $user->setAge($request->get('userAge'));
            $em->flush();

            
        
        }

        return new Response( json_encode(
                array('success' => 'Success' )
                )
            );
    }

}
