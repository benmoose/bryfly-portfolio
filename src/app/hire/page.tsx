import {Column, Heading, Meta, Schema} from '@once-ui-system/core'
import {about, baseURL, commission, home} from '@/resources'
import {Projects} from '@/components/work/Projects'

export async function generateMetadata() {
    return Meta.generate({
        baseURL,
        title: about.title,
        description: about.description,
        image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
        path: about.path
    })
}

export default function Commission() {
    return (
        <Column maxWidth='m' paddingTop='24'>
            <Schema
                as='webPage'
                baseURL={baseURL}
                path={commission.path}
                title={commission.title}
                description={commission.description}
            />
            <Heading marginBottom='l' variant='heading-strong-xl' align='center'>
                Hire Page
            </Heading>
            <Projects/>
        </Column>
    )
}
