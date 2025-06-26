type SkillBadgeProps = {
  name: string;
  url: string;
  badge: string;
};

export function SkillBadge({ name, url, badge }: SkillBadgeProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" title={name}>
      <img src={badge} alt={name} />
    </a>
  );
}
