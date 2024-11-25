import ImageSection from '../components/profile/ImageSection';
import ProfileHeader from '../components/profile/ProfileHeader';
import InfoSection from '../components/profile/InfoSection';

export default function Profile() {
  return (
    <div className="profile">
      <ProfileHeader />
      <main className="profile__content">
        <ImageSection />
        <InfoSection />
      </main>
    </div>
  );
}
