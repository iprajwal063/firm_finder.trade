export const CandlestickBackground = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, hsl(0, 0%, 4%) 0%, hsl(0, 0%, 8%) 100%)',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      {/* Animated candlesticks */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0.1,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, hsl(15, 100%, 50%) 1px, transparent 1px),
            radial-gradient(circle at 40% 60%, hsl(15, 100%, 50%) 1px, transparent 1px),
            radial-gradient(circle at 60% 40%, hsl(15, 100%, 50%) 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, hsl(15, 100%, 50%) 1px, transparent 1px)
          `,
          backgroundSize: '200px 200px',
          animation: 'slide 20s linear infinite',
        }}
      />
      
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(200px); }
        }
      `}</style>
    </div>
  )
}

export default CandlestickBackground
