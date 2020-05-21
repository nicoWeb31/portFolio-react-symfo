<?php

namespace App\Controller;

use App\Entity\Message;
use App\Repository\MessageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
     * @Route("/api", name="api_")
     */
class ApiController extends AbstractController
{
    /**
     * @Route("/liste-message", name="liste_message", methods={"GET"})
     */
    public function liste(MessageRepository $repo)
    {
        //get message
        $message = $repo->findAll();
        //dd($message);

        //specifie i encode in json
        $encoders = [new JsonEncoder()];

        //instantiation normaliser for convert the collection in array
        $normalizers = [new ObjectNormalizer()];

        //make conversion 

        //instantiation serializer
        $serializer = new Serializer($normalizers,$encoders);
        
        //attetion reffernece circulaire si il y a, add third param
        $jsContent = $serializer->serialize($message,'json',[
            'circular_reference_handler' => function($object){
                return $object->getId();
            }
        ]);

        //dd($jsContent);

        //instentiation response
        $response = new Response($jsContent);
        //hearder http 
        $response->headers->set('Content-Type','application/json');
        //send response
        return $response;



    }




    /**
     * @Route("/add-message", name="add_message", methods={"POST"})
     */
    public function AddMessage(Request $req, EntityManagerInterface $man)
    {


        //on verifie si requétes xmlHttpRequest
        // if($req->isXmlHttpRequest()){
            //on verif data apres decode
            $data = json_decode($req->getContent());


            $message = New Message();
            //on hyderate nos aricle 

            $message->setName($data->name);
            $message->setEmail($data->email);
            $message->setContent($data->content);
            $message->setCreatedAt(new \DateTime('now'));

            //on send en bdd
            $man->persist($message);
            $man->flush();

            //return confrim

            return new Response('Message ajouter avec suuccess', 201);

        // }

        // return new Response('erreur',404);




    }


}
