import DefaultLayout from '~/layout/client/DefaultLayout';
import ContentHome from './ContentHome';

function HomePage() {
    console.log(1);
    return (
        <DefaultLayout>
            <ContentHome />
        </DefaultLayout>
    );
}

export default HomePage;
