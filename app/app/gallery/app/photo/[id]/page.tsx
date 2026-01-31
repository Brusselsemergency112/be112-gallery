export default function PhotoPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1>Photo {params.id}</h1>
    </main>
  );
}

