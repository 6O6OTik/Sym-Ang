<?php

namespace Login\LoginBundle\Controller;

use Login\LoginBundle\Entity\Users;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Login\LoginBundle\Entity\UsersTask;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Security\Core\User\User;


class TaskController extends Controller
{
    /**
     * @Route("/showTask", name="show_task_user")
     */
    public function showAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        /** @var UsersTask[] $tasks */
        $tasks = $em->getRepository('LoginLoginBundle:UsersTask')->findAll();

        $result = [];

        foreach ($tasks as $key => $task) {
            $result[$key]['id'] = $task->getId();
            $result[$key]['username'] = $task->getUser()->getUsername();
            $result[$key]['taskTitle'] = $task->getTaskTitle();
            $result[$key]['taskBody'] = $task->getTaskBody();
            $result[$key]['status'] = $task->getPriority();
        }
        $response = new Response(json_encode($result));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }


    /**
     * @Route("/taskId", name="task_id")
     *
     */
    public function taskIdAction(Request $request)
    {
        $id = $request->get('userId');

        $em = $this->getDoctrine()->getManager();
        /** @var Users $user */
        $user = $em->getRepository('LoginLoginBundle:Users')->find($id);

        $user->getUsersTasks();
        /** @var UsersTask[] $tasks */
        $tasks = $user->getUsersTasks();

        $result = [];
        foreach ($tasks as $key => $task) {
            $result[$key]['id'] = $task->getId();
            $result[$key]['username'] = $user->getUsername();
            $result[$key]['taskTitle'] = $task->getTaskTitle();
            $result[$key]['taskBody'] = $task->getTaskBody();
            $result[$key]['taskStatus'] = $task->getPriority();
        }
        $response = new Response(json_encode($result));
        $response->headers->set('Content-Type', 'application/json');

        return $response;

    }

    /**
     * @Route("/addTaskUser", name="addUserTask3")
     */

    public function addTaskAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $taskTitle = $data['taskTitle'];
        $taskBody = $data['taskBody'];
        $priority = $data['taskStatus'];
        $id = $data['userId'];

        $tz = new UsersTask();

        /** @var UsersTask $tz */
        $tz->setTaskTitle($taskTitle);
        $tz->setTaskBody($taskBody);
        $tz->setPriority($priority);

        $em = $this->getDoctrine()->getEntityManager();
        $user = $em->getRepository('LoginLoginBundle:Users')->find($id);

        $tz->setUser($user);

        $em->persist($tz);
        $em->flush();
        $id = $tz->getId();


        return new Response(json_encode(array('userId' => $id)));


    }

    /**
     * @Route("/editTaskUser", name="editTaskUser")
     */
    public function editAction(Request $request)
    {

        $data = json_decode($request->getContent(), true);

        $em = $this->getDoctrine()->getManager();
//        $user = $em->getRepository('LoginLoginBundle:Users')->find(#request->get('userId));
        $user = $em->getRepository('LoginLoginBundle:UsersTask')->find($request->get('userId','taskTitle'));
//
        if (!$user) {
            throw $this->createNotFoundException(
                'no user task id'
            );
        }

        $user->setTaskTitle($data['taskTitle']);
        $user->setTaskBody($data['taskBody']);
        $user->setPriority($data['taskStatus']);

        $em->flush();

        return new Response(json_encode(
            array ('success' => ' Success')
        ));
    }
    /**
     * @Route("/deleteTaskUser", name="deleteTask")
     */
    public function deleteAction (Request $request)
    {
        $userId =  $request->get('userId');

        $em = $this->getDoctrine()->getManager();
        $entity = $em->getRepository('LoginLoginBundle:UsersTask')->find($userId);

        if (!$entity){
            throw $this->createNotFoundException('Unable to find User Task entity.');
        }

        $em->remove($entity);
        $em->flush();

        $response = new Response(json_encode(array('result' => true)));
        $response ->headers->set('Content-type', 'application/json');

        return $response;
    }




}


