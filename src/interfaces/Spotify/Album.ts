import { Artist } from './Artist';
import { ExternalUrls } from './shared/ExternalUrls';
import { Image } from './shared/Image';

export interface SimplifiedAlbum {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}
