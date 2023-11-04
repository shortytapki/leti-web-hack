interface AuthPageProps {
    className?: string;
}

const AuthPage = ({className}: AuthPageProps) => {
    return (
        <div className={"pd-main"}>
            Страница авторизации
        </div>
    );
};

export default AuthPage;