<?php

namespace Login\LoginBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity
 * @ORM\Table(name="usersTask")
 */
//usetr  prod
//feature task

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

    protected $username;
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

//    Поле для ссылки many-to-one
//
//    /**
//     * @ManyToOne(targetEntity="Users", inversedBy="tasks")
//     */
//    private $User_id;

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
     * Set username
     *
     * @param string $username
     * @return UsersTask
     */
    public function setUsername($username)
    {
        $this->username = $username;

        return $this;
    }

    /**
     * Get username
     *
     * @return string 
     */
    public function getUsername()
    {
        return $this->username;
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
}
