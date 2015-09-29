<?php

namespace Login\LoginBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Login\LoginBundle\Entity\Users;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
//use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

use Symfony\Component\HttpFoundation\Response;


class AuthController extends Controller
{

    /**
     * @Route("/log")
     */
    public function LoginAction(Request $request)
    {
        if ($request->getMethod()=='POST') {
            $username = $request->get('username');
            $password = $request->get('password');

            $em = $this->getDoctrine()->getEntityManager();
            $repository = $em->getRepository('LoginLoginBundle:Users');

            $user = $repository->findOneBy(array('username' => $username, 'password' => $password));

            if ($user) {
                return $this->render('LoginLoginBundle:Auth:login.html.php',
                    array(
                    'username' => $username,
                    'password' => $password
                    ));
            }

        } else {
            return $this->render('LoginLoginBundle:Auth:login.html.php',
                array(
                    'username' => 'error login failed',
                    'password' => 'error password failed'
                ));
        }

//        получения значения с полей

//        return $this->render('LoginLoginBundle:Auth:login.html.php');

    }

    /**
     * @Route("/reg")
     */
    public function singnupAction(Request $request)
    {
        if ($request->getMethod() == 'POST') {

            $username = $request->get('username');
            $password = $request->get('pass');
            $email = $request->get('email');

            $user = new Users();
            $user->setUsername($username);
            $user->setPassword($password);
            $user->setEmail($email);
            $em = $this->getDoctrine()->getEntityManager();
            $em->persist($user);
            $em->flush();

        }

        return $this->render('LoginLoginBundle:Auth:singnup.html.php');
    }


}
