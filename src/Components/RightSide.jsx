import React from 'react'

export default function RightSide() {
  return (
    <div className="w-72 p-4 bg-white border-r border-gray-200 rightside">
        <div>
              <h3 className="text-gray-500 uppercase text-sm font-semibold mb-3">
                Notifications
              </h3>
              <div className="space-y-3">
                <NotificationItem
                  icon="🛠️"
                  title="You fixed a bug."
                  time="Just now"
                />
                <NotificationItem
                  icon="🆕"
                  title="New user registered."
                  time="59 minutes ago"
                />
                <NotificationItem
                  icon="🛠️"
                  title="You fixed a bug."
                  time="12 hours ago"
                />
                <NotificationItem
                  icon="📢"
                  title="Andi Lane subscribed to you."
                  time="Today, 11:59 AM"
                />
              </div>
            </div>
      
            
            <div className="mt-6">
              <h3 className="text-gray-500 uppercase text-sm font-semibold mb-3">
                Activities
              </h3>
              <div className="border-gray-300 space-y-3">
                <ActivityItem
                  avatar="https://randomuser.me/api/portraits/women/1.jpg"
                  title="Changed the style."
                  time="Just now"
                />
                <ActivityItem
                  avatar="https://randomuser.me/api/portraits/men/1.jpg"
                  title="Released a new version."
                  time="59 minutes ago"
                />
                <ActivityItem
                  avatar="https://randomuser.me/api/portraits/women/2.jpg"
                  title="Submitted a bug."
                  time="12 hours ago"
                />
                <ActivityItem
                  avatar="https://randomuser.me/api/portraits/women/3.jpg"
                  title="Modified A data in Page X."
                  time="Today, 11:59 AM"
                />
                <ActivityItem
                  avatar="https://randomuser.me/api/portraits/men/2.jpg"
                  title="Deleted a page in Project X."
                  time="Feb 2, 2025"
                />
              </div>
            </div>
      
         
            <div className="mt-6">
              <h3 className="text-gray-500 uppercase text-sm font-semibold mb-3">
                Contacts
              </h3>
              <div className="space-y-3">
                <ContactItem name="Natali Craig" avatar="https://randomuser.me/api/portraits/women/4.jpg" />
                <ContactItem name="Drew Cano" avatar="https://randomuser.me/api/portraits/men/3.jpg" />
                <ContactItem name="Andi Lane" avatar="https://randomuser.me/api/portraits/men/4.jpg" />
                <ContactItem name="Koray Okumus" avatar="https://randomuser.me/api/portraits/men/5.jpg" />
                <ContactItem name="Kate Morrison" avatar="https://randomuser.me/api/portraits/women/5.jpg" />
                <ContactItem name="Melody Macy" avatar="https://randomuser.me/api/portraits/women/6.jpg" />
              </div>
            </div>
          </div>
        );
      }
      
      function NotificationItem({ icon, title, time }) {
        return (
          <div className="flex items-center space-x-3">
            <span className="text-lg">{icon}</span>
            <div>
              <p className="font-medium text-sm">{title}</p>
              <p className="text-xs text-gray-500">{time}</p>
            </div>
          </div>
        );
      }
      
      function ActivityItem({ avatar, title, time }) {
        return (
          <div className="flex items-start space-x-3">
            <img className="w-8 h-8 rounded-full" src={avatar} alt={title} />
            <div>
              <p className="font-medium text-sm">{title}</p>
              <p className="text-xs text-gray-500">{time}</p>
            </div>
          </div>
        );
      }
      
      function ContactItem({ name, avatar }) {
        return (
          <div className="flex items-center space-x-3">
            <img className="w-8 h-8 rounded-full" src={avatar} alt={name} />
            <p className="font-medium text-sm">{name}</p>
          </div>
        );
      }
      
  

