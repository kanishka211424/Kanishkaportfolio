import { motion } from 'framer-motion';
export function AchievementsSection() {
  const groups = [
    {
      title: 'Achievements',
      items: [
        {
          title: '🏉 University Colors – Rugby',
          meta: '2023 | 2024 | 2025',
          description:
            'Represented university at national level rugby competitions for three consecutive years.'
        },
        {
          title: '🎖 School Colors – Athletics',
          meta: 'Poramadulla Central College – 2018',
          description:
            'Represented school at national level athletics competitions for three consecutive years.'
        },
        {
          title: '🏆 Hermann Loos Championship Trophy (Cadet Platoon)',
          meta: '5th Place – 2017',
          description:
            'Awarded for outstanding cadet platoon performance in the annual championship.'
        }
      ]
    },
    {
      title: '📦 Professional Memberships',
      items: [
        {
          title:
            'Member – Chartered Institute of Logistics and Transport Sri Lanka (CILT)',
          meta: 'Credential ID: S2707',
          description: ''
        },
        {
          title: 'Member – Society of Transport and Logistics',
          meta: '',
          description: ''
        }
      ]
    },
    {
      title: '🏆 Leadership, Sports & Volunteering',
      items: [
        {
          title:
            'Member – MORA Rugby Team, University of Moratuwa, Leo Club, University of Moratuwa, Cadet Platoon',
          meta: '2013–2018',
          description: ''
        },
        {
          title: 'Sports Captain – 2018',
          meta: '',
          description: ''
        },
        {
          title: 'Senior Prefect – 2018 (Poramadulla Central College)',
          meta: '',
          description: ''
        }
      ]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-surface-light flex-grow"></div>
          <div className="font-mono text-sm text-accent-teal tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-teal"></span>
            Node 05 // ACHIEVEMENTS &amp; VOLUNTEERING
          </div>
          <div className="h-px bg-surface-light flex-grow"></div>
        </div>

        <div className="space-y-10">
          {groups.map((group, groupIndex) => (
            <div key={group.title} className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="h-px bg-surface-light flex-grow"></div>
                <h3 className="text-sm md:text-base font-display font-semibold text-white tracking-wide">
                  {group.title}
                </h3>
                <div className="h-px bg-surface-light flex-grow"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {group.items.map((item, itemIndex) => (
                  <motion.div
                    key={`${group.title}-${item.title}-${itemIndex}`}
                    className="bg-surface border border-surface-light rounded-lg p-6 hover:border-accent-teal transition-colors"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: groupIndex * 0.05 + itemIndex * 0.05
                    }}>
                    <div className="flex flex-col gap-2">
                      <div className="text-base font-display font-bold text-white">
                        {item.title}
                      </div>
                      {(item.meta || item.description) && (
                        <div className="space-y-2">
                          {item.meta && (
                            <div className="text-xs font-mono text-accent-teal">
                              {item.meta}
                            </div>
                          )}
                          {item.description && (
                            <p className="text-sm text-text-secondary leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>);

}