import { NotFoundHaven } from '../../../app/haven/NotFoundHaven';
import { AmsterdamHaven } from '../../../app/haven/AmsterdamHaven';

interface UseGetHavenVersionProps {
    versionString: string;
}

const useGetHavenVersion = (props: UseGetHavenVersionProps) => {

    if (props.versionString === "A")
        return AmsterdamHaven
    else
        return NotFoundHaven;

}

export default useGetHavenVersion;