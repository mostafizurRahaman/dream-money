 import image1 from '../../assets/affiliate.svg'; 

const ServiceCard = () => {

   return (
      <article className='flex items-center justify-center flex-col gap-2 py-7  px-5 rounded-sm shadow-lg text-center '>
         <img className='w-20 h-20 ' src={image1} alt="" />
         <h4 className='text-2xl font-bold uppercase'>Affilate Program</h4>
         <p>
            Refer friends and earn 5% commission on their job deposits and
            completed tasks
         </p>
      </article>
   );
};

export default ServiceCard;
