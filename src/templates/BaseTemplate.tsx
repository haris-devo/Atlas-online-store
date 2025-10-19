import { Footer } from '@/components/main-ui/Footer';

export const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full text-gray-700 antialiased">
      <div className="">
        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
};
