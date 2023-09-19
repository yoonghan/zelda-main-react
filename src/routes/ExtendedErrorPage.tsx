import { useRouteError } from 'react-router-dom'
import { ErrorPage } from '@yoonghan/walcron-microfrontend-shared'

interface RouteProps {
  statusText: string
  message: string
}

export default function ExtendedErrorPage() {
  const error = useRouteError() as RouteProps

  return <ErrorPage statusText={error.statusText} message={error.message} />
}
