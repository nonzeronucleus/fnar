import releaseButtonStatus from '../../../consts/releaseButtonStatus'

export default ({ doorReleases }, door) => doorReleases[door].status === releaseButtonStatus.enabled;
