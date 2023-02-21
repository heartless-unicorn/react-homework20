import "./pages-style/PhotoPage.css";

const pics = [
  "https://visithanko.fi/wp-content/uploads/2020/03/koira_ranta_auringonlasku_kesa-600x600.jpg",
  "https://visithanko.fi/wp-content/uploads/2020/03/Koira_regatanranta-600x600.jpg",
  "https://cdn.shopify.com/s/files/1/0654/0895/articles/GUARD-DOGS-blog.jpg?v=1602522804",
  "https://peachonaleash.com/wp-content/uploads/2022/04/shutterstock_1743947300-600x600.jpg",
  "https://peachonaleash.com/wp-content/uploads/2021/05/shutterstock_549057424-600x600.jpg",
  "https://peachonaleash.com/wp-content/uploads/2022/05/shutterstock_1859652601-600x600.jpg",
  "https://saphireeventgroup.com/wp-content/uploads/2020/02/husky-wedding-photo3-600x600.jpg",
  "https://peachonaleash.com/wp-content/uploads/2023/01/shutterstock_235887487-600x600.jpg",
  "https://www.supremedoggarage.com/wp-content/uploads/2021/05/92647181-C759-411C-9A8F-865B4653D37E-%E2%80%93-kopia-2-e1638024599207.jpeg",
];

export default function PhotoPage() {
  return (
    <div className="PhotoPage">
      {pics.map((el, i) => {
        return (
          <div key={i}>
            <img src={el} alt="Dog" />
          </div>
        );
      })}
    </div>
  );
}
