import { BaseButton } from '@web/nicollet'
import dynamic from 'next/dynamic'
 
const DynamicBaseButton = dynamic(() => import('../../components/base-button'), {
  loading: () => <p>Loading...</p>,
})

/**
 * This example tests if chunking deduplicates or not
 */
export default function Home() {
  return <div>
    <BaseButton/>
    <DynamicBaseButton />
    </div>
}
