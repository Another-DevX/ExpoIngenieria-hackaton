import React from 'react';
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const descriptions = [
  'Fitness enthusiast, @getnextui lover she/her',
  'GymBro and @getnextui lover he/him',
  'Thriatlon athlete, @getnextui lover she/her',
  'Calisthenics athlete, @getnextui lover he/him',
];
const names = [
  'FitnessAlex',
  'GymBroMike',
  'TriathlonTina',
  'CalisthenicsCarlos',
  'YogaYasmine',
  'RunnerRick',
  'LiftLifeLaura',
  'AerobicAnna',
  'WorkoutWill',
  'PilatesPaula',
];

const getRandomDescription = (descriptions: any) => {
  /**
   * Selecciona y devuelve una descripción aleatoria de la lista proporcionada.
   * @param {string[]} descriptions - Una lista de descripciones.
   * @returns {string} - Una descripción seleccionada al azar.
   */

  // Obtener un índice aleatorio
  const randomIndex = Math.floor(Math.random() * descriptions.length);

  // Devolver la descripción correspondiente al índice aleatorio
  return descriptions[randomIndex];
};

export const UserTwitterCard = ({ id }: any) => {
  const { push } = useRouter();
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card shadow='none' className='max-w-[300px] border-none bg-transparent'>
      <CardHeader className='justify-between'>
        <div className='flex gap-3'>
          <Avatar
            isBordered
            radius='full'
            size='md'
            src='https://i.pravatar.cc/150'
          />
          <div className='flex flex-col items-start justify-center'>
            <h4 className='text-small font-semibold leading-none text-default-600'>
              {getRandomDescription(names)}
            </h4>
            <h5 className='text-small tracking-tight text-default-500'>
              @{getRandomDescription(names)}
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? 'bg-transparent text-foreground border-default-200'
              : ''
          }
          color='primary'
          radius='full'
          size='sm'
          variant={isFollowed ? 'bordered' : 'solid'}
          onPress={() => push(`/profile/${id}`)}
        >Profile</Button>
      </CardHeader>
      <CardBody className='px-3 py-0'>
        <p className='text-small pl-px text-default-500'>
          {getRandomDescription(descriptions)}
          <span aria-label='confetti' role='img'>
            🎉
          </span>
        </p>
      </CardBody>
      <CardFooter className='gap-3'>
        <div className='flex gap-1'>
          <p className='font-semibold text-default-600 text-small'>4</p>
          <p className=' text-default-500 text-small'>Following</p>
        </div>
        <div className='flex gap-1'>
          <p className='font-semibold text-default-600 text-small'>97.1K</p>
          <p className='text-default-500 text-small'>Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
};
