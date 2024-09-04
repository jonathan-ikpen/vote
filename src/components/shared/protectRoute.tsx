// components/ProtectedRoute.tsx
import { useRouter } from 'next/router';
import { useEffect, ComponentType } from 'react';
import { useVoterStore } from '@/store/voter';

interface ProtectedRouteProps {
  // Define any additional props that might be passed to the protected component
}

const ProtectedRoute = <P extends ProtectedRouteProps>(WrappedComponent: ComponentType<P>) => {
  const ComponentWithProtection = (props: P) => {
    const router = useRouter();
    const isAuthenticated = useVoterStore((state) => state.isAuthenticated);

    useEffect(() => {
      if (!isAuthenticated) {
        router.replace('/'); // Redirect to login page if not authenticated
      }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
      return null; // Optionally show a loading spinner or nothing while redirecting
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithProtection;
};

export default ProtectedRoute;
