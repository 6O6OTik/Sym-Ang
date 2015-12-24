<?php

namespace Login\LoginBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Login\LoginBundle\Entity\Users;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;


class AuthController extends Controller
{
    /**
     * @Route("/", name="blog_home_index" )
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('LoginLoginBundle:Default:index.html.twig', array(
            'base_dir' => realpath($this->container->getParameter('kernel.root_dir').'/..'),
        ));
    }



    /**
     * @Route("/log", name="login")
     */
    public function LoginAction(Request $request)
    {
        if ($request->getMethod() == 'POST') {
            $data = json_decode($request->getContent(),true);
            $username = $data['username'];
            $password = $data['password'];

            $em = $this->getDoctrine()->getEntityManager();
            $repository = $em->getRepository('LoginLoginBundle:Users');

            $user = $repository->findOneBy(array('username' => $username, 'password' => $password));

            if ($user) {
                return new JsonResponse([
                    'username' => $user->getUserName(),
                    'success' => true

                ]);
                //return $this->render('LoginLoginBundle:Default:welcome.html.twig', array('username' => $user->getUsername()));
            } else {
                throw new NotFoundHttpException("User not found.");
//                return new JsonResponse([
//                    'username' => 'error'
//                ]);
//                return $this->render('LoginLoginBundle:Default:login.html.twig', array('username' => 'Login error'));
            }
        }
        return $this->render('LoginLoginBundle:Default:login.html.twig');
    }


    /**
     * @Route("/reg", name="login_sin" )
     */
    public function RegAction(Request $request)
    {
        if ($request->getMethod() == 'POST') {
            $data = json_decode($request->getContent(),true);
            $username = $data['username'];
            $password = $data['password'];
            $email = $data['email'];

            $user = new Users();
            $user->setUsername($username);
            $user->setPassword($password);
            $user->setEmail($email);
            $em = $this->getDoctrine()->getEntityManager();
            $em->persist($user);
            $em->flush();

        }
        if ($user) {
            return new JsonResponse([
                'username' => $user ->getUsername(),
                'success' => true
            ]);
        } else {
            throw new NotFoundHttpException("Problem");
        }
//        return $this->render('LoginLoginBundle:Default:registration.html.twig');
    }

    /**
     * @Route("/reg", name="login_logout" )
     */
    public function LogoutAction(Request $request){

    return $this->render('LoginLoginBundle:Default:index.html.twig');
}



}
