import React, { PropsWithChildren, ReactNode } from 'react'
import { Text } from '@radix-ui/themes';


// interface Props {
//     children: ReactNode
// }

// With interface you can set 'props: Props'
// Hear is without intafce
const ErrorMessege = ({ children }: PropsWithChildren) => {
  return !children ? null : <Text color='red' as='p'>{ children }</Text>;
}

export default ErrorMessege