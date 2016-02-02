<?php

namespace Login\LoginBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Login\LoginBundle\Entity\Users;

/**
 * @ORM\Entity
 * @ORM\Table(name="usersTask")
 */


class UsersTask
{
    /**
     * @ORM\Id()
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;
    /**
     * @ORM\Column(type="string", length=255)
     */
    protected $taskTitle;
    /**
     * @ORM\Column(type="string", length=255)
     */
    protected $taskBody;
    /**
     * @ORM\Column(type="string", length=255)
     */
    protected $priority;

//    start many-to-one
//    /**
//     * @ORM\Column(type="string", length=255)
//     */
//    protected $task_id;
//
    /**
     *
     * @ORM\ManyToOne(targetEntity="Users", inversedBy="usersTasks")
     */

    private $user;


//    end many-to-one
    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set task
     *
     * @param string $task
     * @return UsersTask
     */
    public function setTask($task)
    {
        $this->task = $task;

        return $this;
    }

    /**
     * Get task
     *
     * @return string
     */
    public function getTask()
    {
        return $this->task;
    }

    /**
     * Set priority
     *
     * @param string $priority
     * @return UsersTask
     */
    public function setPriority($priority)
    {
        $this->priority = $priority;

        return $this;
    }

    /**
     * Get priority
     *
     * @return string
     */
    public function getPriority()
    {
        return $this->priority;
    }



    /**
     * Set taskTitle
     *
     * @param string $taskTitle
     * @return UsersTask
     */
    public function setTaskTitle($taskTitle)
    {
        $this->taskTitle = $taskTitle;

        return $this;
    }

    /**
     * Get taskTitle
     *
     * @return string
     */
    public function getTaskTitle()
    {
        return $this->taskTitle;
    }

    /**
     * Set taskBody
     *
     * @param string $taskBody
     * @return UsersTask
     */
    public function setTaskBody($taskBody)
    {
        $this->taskBody = $taskBody;

        return $this;
    }

    /**
     * Get taskBody
     *
     * @return string
     */
    public function getTaskBody()
    {
        return $this->taskBody;
    }

    /**
     * @return mixed
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param mixed $userTaskId
     */
    public function setUser($user)
    {
        $this->user = $user;
    }
}